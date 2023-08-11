import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { TContact, TCreateContact } from "../../interfaces/contacts.interface";

export const createServiceContact = async (
  contactData: TCreateContact
): Promise<TContact> => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contactEntity = contactRepository.create(contactData);

  const contact: TContact = await contactRepository.save(contactEntity);

  return contact;
};
