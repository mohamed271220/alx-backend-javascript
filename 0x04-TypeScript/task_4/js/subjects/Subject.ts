import * as TeacherNamespace from './Teacher';

namespace Subjects {
  export import Teacher = TeacherNamespace.Subjects.Teacher;
  export class Subject {
    teacher!: Subjects.Teacher;

    setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}

export const Subject = new Subjects.Subject();