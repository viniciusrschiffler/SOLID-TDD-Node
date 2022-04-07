import { StudentRepository } from "../../src/application/repositories/StudentsRepository";
import { Student } from "../../src/domain/entities/student";

export class InMemoryStudentsRepository implements StudentRepository {
    public items: Student[] = []


    async findById(id: string): Promise<Student | null> {
        const student = this.items.find(student =>  student.id === id);

        return !student ? null : student;
    }
}