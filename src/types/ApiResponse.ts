import { Message } from "@/models/User";

export interface ApiResponse {
  status: number;
  success: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Message[];
}
