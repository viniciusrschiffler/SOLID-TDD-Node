import { Challage } from "../../domain/entities/challenge";

export interface ChallengeRepository {
    findById(id: string): Promise<Challage | null>
}