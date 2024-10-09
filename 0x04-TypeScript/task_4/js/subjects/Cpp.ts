import { Subjects } from './Teacher';
import { Subject } from './Subject';

declare module './Teacher' {
  interface Teacher {
    experienceTeachingC?: number; // Adding optional attribute
  }
}

export namespace Subjects {
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingC ? 
        `Available Teacher: ${this.teacher.firstName}` : 
        'No available teacher';
    }
  }
}