// Swagger 관련 모듈 임포트
import * as UserSwagger from '../users/swagger';
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
};

// 1) 병합 로직: Swagger API의 paths 객체를 병합하여 하나의 paths 객체를 생성
const { paths } = Object.values(Swaggers).reduce(
    (acc, apis) => {
        const APIs = Object.values(apis);

        APIs.forEach((api) => {
            const [path, methods] = Object.entries(api)[0];

            if (!acc.paths[path]) {
                acc.paths[path] = methods;
            } else {
                // 병합: 기존 메서드와 새로운 메서드를 병합
                acc.paths[path] = {
                    ...acc.paths[path], // 기존 메서드
                    ...methods // 새로운 메서드
                };
            }
        });

        return acc;
    },
    { paths: {} }
);


// 2) 스웨거에 등록할 JSON 만들기 (DefaultSwagger + 병합된 paths)
export const swaggerDocs = {
    ...DefaultSwagger,
    paths, // 병합된 paths 등록
};


// 3) 스웨거에 등록할 옵션 설정
export const options = {
    swaggerOptions: {
        url: '/swagger.json',
    },
};
