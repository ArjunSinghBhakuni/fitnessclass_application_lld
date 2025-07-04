import { BookingStatus } from "./enums";

export class Booking {
    id: string;
    userId: string;
    fitnessClassId: string;
    status: BookingStatus;
    createdOn: Date;
    updatedOn: Date;
  
    constructor(id: string, userId: string, fitnessClassId: string, status: BookingStatus) {
      this.id = id;
      this.userId = userId;
      this.fitnessClassId = fitnessClassId;
      this.status = status;
      this.createdOn = new Date();
      this.updatedOn = new Date();
    }
  
    cancel() {
      this.status = BookingStatus.Cancelled;
      this.updatedOn = new Date();
    }
  }