// Types
interface Options {
  projectId: string;
}

interface FeedbackOptions {
  feedback: string;
  name?: string;
  email?: string;
  label?: "idea" | "issue" | "question" | "complaint" | "featureRequest" | "other";
}

interface EventOptions {
  key: string;
}

interface ChangeLog {
  id: string;
  date: string;
  title: string;
  post: string;
}

interface APIError {
  message: string;
  status: number;
}

declare function ProjectPlannerAI(options: Options): {
  createFeedback(feedbackOptions: FeedbackOptions): Promise<{ message: string } | APIError>;
  createEvent(eventOptions: EventOptions): Promise<{ message: string } | APIError>;
  getChangeLog(): Promise<ChangeLog[]>;
};

export { ProjectPlannerAI };
export type { Options, FeedbackOptions, EventOptions, ChangeLog, APIError };
