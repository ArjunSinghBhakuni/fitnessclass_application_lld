import { User } from "./User";

export class FitnessClass {
    id: string;
    name: string;
    type: string;
    capacity: number;
    scheduledTime: Date;
    attendees: User[] = [];
    waitlist: User[] = [];
    isCancelled: boolean = false;
  
    constructor(id: string, name: string, type: string, capacity: number, scheduledTime: Date) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.capacity = capacity;
      this.scheduledTime = scheduledTime;
    }

    notifyWaitlistPromotion(user: User) {
        console.log(`Notified ${user.name}: You've been moved from waitlist to attendee!`);
      }

      promoteFromWaitlist() {
        if (this.waitlist.length > 0) {
          const nextUser = this.waitlist.shift()!;
          this.attendees.push(nextUser);
          nextUser.activeBookings += 1;
          this.notifyWaitlistPromotion(nextUser);
        }
      }

}