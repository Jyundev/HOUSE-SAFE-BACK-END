import { Request, Response, NextFunction } from 'express';

export const pagination = (req: Request, res: Response, next: NextFunction): void => {
    // 기본 페이지 및 한 페이지당 항목 수 설정
    const page: string = req.query.page as string ?? "1";
    const limit: string = req.query.limit as string ?? "20";

    // limit을 숫자로 변환, 기본값은 20
    const take: number = Number(limit) || 20;

    // 페이지에 따른 건너뛰기 항목 수 계산
    const skip: number = (Number(page) - 1) * take;

    // req 객체에 take와 skip 추가
    req.take = take;
    req.skip = skip;

    next();
};
