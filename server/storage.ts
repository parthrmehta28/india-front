import { 
  User, 
  InsertUser,
  Subscriber, 
  InsertSubscriber,
  ContactMessage,
  InsertContactMessage,
  Newsletter,
  InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Subscriber methods
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getAllSubscribers(): Promise<Subscriber[]>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  
  // Newsletter methods
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getAllNewsletters(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribers: Map<number, Subscriber>;
  private contactMessages: Map<number, ContactMessage>;
  private newsletters: Map<number, Newsletter>;
  
  private userCurrentId: number;
  private subscriberCurrentId: number;
  private contactMessageCurrentId: number;
  private newsletterCurrentId: number;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
    this.contactMessages = new Map();
    this.newsletters = new Map();
    
    this.userCurrentId = 1;
    this.subscriberCurrentId = 1;
    this.contactMessageCurrentId = 1;
    this.newsletterCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Subscriber methods
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.subscriberCurrentId++;
    const createdAt = new Date();
    const subscriber: Subscriber = { ...insertSubscriber, id, createdAt };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
  
  async getAllSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }
  
  // Contact message methods
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const createdAt = new Date();
    const message: ContactMessage = { ...insertMessage, id, createdAt };
    this.contactMessages.set(id, message);
    return message;
  }
  
  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  // Newsletter methods
  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.newsletterCurrentId++;
    const createdAt = new Date();
    const newsletter: Newsletter = { ...insertNewsletter, id, createdAt };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
  
  async getAllNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }
}

export const storage = new MemStorage();
