import { Request, Response } from "express";
import { TContact, TCreateContact } from "../interfaces/contacts.interface";
import { createServiceContact } from "../services/contacts/createContact.service";
import { getAllServiceContacts } from "../services/contacts/getAllServiceContacts.service";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TCreateContact = req.body;

  const contact: TContact = await createServiceContact(data);

  return res.status(201).json(contact);
};

export const getAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts: TContact[] = await getAllServiceContacts();

  return res.status(200).json(contacts);
};
