import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { TContact } from "../../interfaces/contacts.interface";

export const getAllServiceContacts = async (): Promise<TContact[]> => {
  const contactRepository: Repository<TContact> =
    AppDataSource.getRepository(Contacts);
  const contacts: TContact[] = await contactRepository.find();
  return contacts;
};
