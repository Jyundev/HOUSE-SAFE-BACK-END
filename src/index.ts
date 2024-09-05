import { NextFunction, Request, Response } from 'express';
import swaggerUI from "swagger-ui-express";
import Controllers from "./controllers";
import database from "./database";
import { options, swaggerDocs } from "./swagger";

(async () => {
    const helmet = require('helmet');
    const express = require('express');
    const cors = require('cors');
    const app = express();
    const PORT = process.env.PORT || 8000;

    console.log(swaggerDocs)

    try {
        await database.$connect();
    } catch (error) {
        console.error("Failed to connect to the database", error);
        process.exit(1); // Exit process with failure code
    }

    // 미들웨어 설정
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true, limit: '700mb' }));

    // 라우터 설정
    Controllers.forEach((controller) => {
        if (controller.path && controller.router) {
            app.use(controller.path, controller.router);
        } else {
            console.error("Controller is missing path or router", controller);
        }
    });

    // Swagger Documentation JSON 제공
    app.get('/swagger.json', (req: Request, res: Response) => {
        res.status(200).json(swaggerDocs);
    });

    // Swagger UI 설정
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs, options));

    // Error Handling Middleware
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack || err);
        res.status(err.status || 500).json({
            message: err.message || 'An unexpected error occurred',
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        });
    });

    // 서버 시작
    app.listen(PORT, () => {
        console.log('🚀 Server is up and running! 🚀\n');
        console.log(`Listening on port: ${PORT}\n`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });


})();

// 서버 종료 처리
process.on('SIGTERM', async () => {
    try {
        await database.$disconnect();
    } catch (error) {
        console.error("Failed to disconnect from the database", error);
    } finally {
        process.exit(0);
    }
});
