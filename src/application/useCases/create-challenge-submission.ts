import { Submission } from "../../domain/entities/submission";
import { ChallengeRepository } from "../repositories/ChallengesRepository";
import { StudentRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRquest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission {
    constructor(
        private studentsRepository: StudentRepository,
        private challengeRepository: ChallengeRepository
    ){}

    async execute({ studentId, challengeId}: CreateChallengeSubmissionRquest) {
        const student = await this.studentsRepository.findById(studentId)
        const cheallenge = await this.challengeRepository.findById(challengeId)

        if (!student) {
            throw new Error('Students does not exist.')
        }

        if (!cheallenge) {
            throw new Error('Cheallenge does not exist.')
        }

        const submission = Submission.create({
            studentId,
            challengeId
        })

        return submission;
    }
}