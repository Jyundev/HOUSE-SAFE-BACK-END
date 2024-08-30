import { BadRequestError, NotFoundError } from '../../errors';
import database from "../../database";

export class LandlordService {

  async findLandlordByName(name: string, { skip = 0, take = 20 }) {
    if (!name) {
      throw new BadRequestError("Name parameter is required.");
    }

    console.log(name);
    const landlords = await database.bad_landlord.findMany({
      where: {
        name,
      },
      skip,
      take,
    });

    const count = await database.bad_landlord.count({
      where: {
        name,
      },
    });

    if (landlords.length === 0) {
      throw { status: 404, message: "임대인을 찾을 수 없습니다." };
    }

    return {
      landlords,
      count,
    };
  }


  async findLandlords({ skip = 0, take = 20 }) {
    const landlords = await database.bad_landlord.findMany({
      skip,
      take,
    });

    const count = await database.bad_landlord.count();

    return {
      landlords,
      count,
    };
  }


}
