import { Subjects } from './Teacher';
import { Subject } from './Subject';

declare module './Teacher' {
  interface Teacher {
    experienceTeachingJava?: number; // Adding optional attribute
  }
}

namespace Subjects {
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingJava ? 
        `Available Teacher: ${this.teacher.firstName}` : 
        'No available teacher';
    }
  }
}

export const java = new Subjects.Java();