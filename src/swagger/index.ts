// Swagger 관련 모듈 임포트
import * as UserSwagger from '../users/swagger';
import * as LandlordSwagger from '../landlords/swagger';

import DefaultSwagger from './defaultSwagger';

// Swagger의 Path 객체에 대한 타입 정의
interface SwaggerPath {
    [key: string]: {
        [method: string]: any; // 각 메서드가 취하는 파라미터 및 응답 등의 상세 정의
    };
}

// Swagger API 타입 정의
interface SwaggerAPI {
    [key: string]: SwaggerPath;
}

// Swaggers 객체 구성
const Swaggers: { [key: string]: SwaggerAPI } = {
    ...UserSwagger,
    ...LandlordSwagger
};

// 1) 병합 로직: Swagger API의 paths 객체를 병합하여 하나의 paths 객체를 생성
const mergedPaths = Object.values(Swaggers).reduce((acc, apis) => {
    // 각 API 정의는 객체이므로 Object.entries로 경로와 메서드를 처리
    Object.entries(apis).forEach(([path, methods]) => {
        if (!acc[path]) {
            acc[path] = methods; // 경로가 없으면 새로 추가
        } else {
            // 경로가 이미 존재하는 경우, 메서드들을 병합
            Object.entries(methods).forEach(([method, definition]) => {
                acc[path][method] = definition; // 기존 메서드에 새로운 정의 추가
            });
        }

    });

    return acc;
}, {});


// 2) 스웨거에 등록할 JSON 만들기 (DefaultSwagger + 병합된 paths)
export const swaggerDocs = {
    ...DefaultSwagger,
    paths: mergedPaths, // 병합된 paths 등록
};



// 3) 스웨거에 등록할 옵션 설정
export const options = {
    swaggerOptions: {
        url: '/swagger.json',
    },
};
