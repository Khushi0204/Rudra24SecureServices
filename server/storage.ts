import { contacts, type Contact, type InsertContact } from "@shared/schema";
import { users, type User, type InsertUser } from "@shared/schema";
import { securityReports, type SecurityReport, type InsertSecurityReport } from "@shared/schema";
import { careerApplications, type CareerApplication, type InsertCareerApplication } from "@shared/schema";
import { clientFeedback, type ClientFeedback, type InsertClientFeedback } from "@shared/schema";

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
  
  // Career application methods
  createCareerApplication(application: InsertCareerApplication): Promise<CareerApplication>;
  getCareerApplications(): Promise<CareerApplication[]>;
  
  // Client feedback methods
  createClientFeedback(feedback: InsertClientFeedback): Promise<ClientFeedback>;
  getFeedbackByReportId(reportId: string): Promise<ClientFeedback[]>;
  getAllFeedback(): Promise<ClientFeedback[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private securityReports: Map<number, SecurityReport>;
  private careerApplications: Map<number, CareerApplication>;
  private clientFeedbacks: Map<number, ClientFeedback>;
  private userCurrentId: number;
  private contactCurrentId: number;
  private reportCurrentId: number;
  private applicationCurrentId: number;
  private feedbackCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.securityReports = new Map();
    this.careerApplications = new Map();
    this.clientFeedbacks = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.reportCurrentId = 1;
    this.applicationCurrentId = 1;
    this.feedbackCurrentId = 1;
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
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt,
      phone: insertContact.phone || null 
    };
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
  
  // Career application methods
  async createCareerApplication(insertApplication: InsertCareerApplication): Promise<CareerApplication> {
    const id = this.applicationCurrentId++;
    const createdAt = new Date();
    const application: CareerApplication = { 
      ...insertApplication, 
      id, 
      createdAt,
      experience: insertApplication.experience || null,
      resumePath: insertApplication.resumePath || null,
      coverLetter: insertApplication.coverLetter || null
    };
    this.careerApplications.set(id, application);
    return application;
  }
  
  async getCareerApplications(): Promise<CareerApplication[]> {
    return Array.from(this.careerApplications.values());
  }
  
  // Client feedback methods
  async createClientFeedback(insertFeedback: InsertClientFeedback): Promise<ClientFeedback> {
    const id = this.feedbackCurrentId++;
    const createdAt = new Date();
    const feedback: ClientFeedback = { 
      ...insertFeedback, 
      id, 
      createdAt,
      reportId: insertFeedback.reportId || null 
    };
    this.clientFeedbacks.set(id, feedback);
    return feedback;
  }
  
  async getFeedbackByReportId(reportId: string): Promise<ClientFeedback[]> {
    return Array.from(this.clientFeedbacks.values()).filter(
      (feedback) => feedback.reportId === reportId
    );
  }
  
  async getAllFeedback(): Promise<ClientFeedback[]> {
    return Array.from(this.clientFeedbacks.values());
  }
}

export const storage = new MemStorage();
