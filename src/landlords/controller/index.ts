import { NextFunction, Request, Response, Router } from 'express';
import { pagination } from '../../middleware/pagination';
import { LandlordDTO } from '../dto';
import { LandlordService } from '../service';

// Router
class LandlordController {
  router = Router();
  path = '/landlords';
  landlordService = new LandlordService();

  constructor() {
    this.init();
  }

  init() {
    this.router.get('/', pagination, this.getLandlords.bind(this));
    this.router.get('/:name', pagination, this.getLandlordsByName.bind(this));
  }

  async getLandlords(req: Request, res: Response, next: NextFunction) {
    try {
      const { landlords, count } = await this.landlordService.findLandlords({
        skip: req.skip,  
        take: req.take
      });

      const landlordsDTO = landlords.map(LandlordDTO.fromEntity);

      res.status(200).json({
        landlords: landlordsDTO,
        count,
      });
    } catch (err) {
      next(err);
    }
  }

  async getLandlordsByName(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.params;
      const { landlords, count } = await this.landlordService.findLandlordByName(name, {
        skip: req.skip ,
        take: req.take 
      });

      const landlordsDTO = landlords.map(LandlordDTO.fromEntity);

      res.status(200).json({
        landlords: landlordsDTO,
        count,
      });
    } catch (err) {
      next(err);
    }
  }
}

const landlordController = new LandlordController();
export default landlordController;
