import { Repository } from "typeorm";
import { User } from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { TUser } from "../../interfaces/user.interface";

export const getUserContactServiceUser = async (
  userId: number
): Promise<any> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: TUser | null = await userRepository.findOne({
    where: { id: userId },
    relations: ["contacts"],
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user.contacts;
};
