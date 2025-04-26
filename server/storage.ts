import { contacts, type Contact, type InsertContact } from "@shared/schema";
import { users, type User, type InsertUser } from "@shared/schema";
import { securityReports, type SecurityReport, type InsertSecurityReport } from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Security report methods
  createSecurityReport(report: InsertSecurityReport): Promise<SecurityReport>;
  getReport(id: number): Promise<SecurityReport | undefined>;
  getReportByReportId(reportId: string): Promise<SecurityReport | undefined>;
  getReportsByEmail(email: string): Promise<SecurityReport[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private securityReports: Map<number, SecurityReport>;
  private userCurrentId: number;
  private contactCurrentId: number;
  private reportCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.securityReports = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.reportCurrentId = 1;
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
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const createdAt = new Date();
    const contact: Contact = { ...insertContact, id, createdAt };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
  
  // Security report methods
  async createSecurityReport(insertReport: InsertSecurityReport): Promise<SecurityReport> {
    const id = this.reportCurrentId++;
    const createdAt = new Date();
    const report: SecurityReport = { ...insertReport, id, createdAt };
    this.securityReports.set(id, report);
    return report;
  }
  
  async getReport(id: number): Promise<SecurityReport | undefined> {
    return this.securityReports.get(id);
  }
  
  async getReportByReportId(reportId: string): Promise<SecurityReport | undefined> {
    return Array.from(this.securityReports.values()).find(
      (report) => report.reportId === reportId
    );
  }
  
  async getReportsByEmail(email: string): Promise<SecurityReport[]> {
    return Array.from(this.securityReports.values()).filter(
      (report) => report.email === email
    );
  }
}

export const storage = new MemStorage();
