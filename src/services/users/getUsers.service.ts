import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { TUser } from "../../interfaces/user.interface";

export const getAllServiceUsers = async (): Promise<TUser[]> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: TUser[] = await userRepository.find();

  return users;
};
