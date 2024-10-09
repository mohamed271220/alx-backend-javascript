import { Subjects } from './Teacher';
import { Subject } from './Subject';

declare module './Teacher' {
  interface Teacher {
    experienceTeachingReact?: number; // Adding optional attribute
  }
}

namespace Subjects {
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingReact ? 
        `Available Teacher: ${this.teacher.firstName}` : 
        'No available teacher';
    }
  }
}

export const react = new Subjects.React();