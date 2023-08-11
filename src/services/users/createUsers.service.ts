import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { TCreateUser, TUser } from "../../interfaces/user.interface";

export const createServiceUser = async (
  userData: TCreateUser
): Promise<TUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = userRepository.create({
    ...userData,
  });

  await userRepository.save(user);

  return user;
};
