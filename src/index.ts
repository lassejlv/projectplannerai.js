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

export function ProjectPlannerAI(options: Options) {
  if (!options.projectId) {
    throw new Error("Missing Project ID in options");
  }

  // Configs
  const API_URL = "https://projectplannerai.com/api";

  // Functions
  const createFeedback = async (feedbackOptions: FeedbackOptions): Promise<{ message: string } | APIError> => {
    // Check if user provided feedback
    if (!feedbackOptions.feedback) {
      throw new Error("Missing feedback option");
    }

    // Fetch API
    const response = await fetch(`${API_URL}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId: options.projectId,
        feedback: feedbackOptions.feedback,
        ...(feedbackOptions.name && { name: feedbackOptions.name }),
        ...(feedbackOptions.email && { email: feedbackOptions.email }),
        ...(feedbackOptions.label && { label: feedbackOptions.label }),
      }),
    });

    // Check if response is ok
    if (!response.ok) {
      return {
        message: response.statusText,
        status: response.status,
      } as APIError;
    }

    const json = await response.json();

    return json;
  };

  const createEvent = async (eventOptions: EventOptions): Promise<{ message: string } | APIError> => {
    // Check if user provided key
    if (!eventOptions.key) {
      throw new Error("Missing key option");
    }

    // Fetch API
    const response = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId: options.projectId,
        key: eventOptions.key,
      }),
    });

    // If the response is not ok
    if (!response.ok) {
      return { message: response.statusText, status: response.status } as APIError;
    }

    const json = await response.json();

    return json;
  };

  const getChangeLog = async (): Promise<ChangeLog[]> => {
    const response = await fetch(`${API_URL}/changelog?projectId=${options.projectId}`);

    const json = (await response.json()) as ChangeLog[];

    return json;
  };

  return { createFeedback, createEvent, getChangeLog };
}

export type { Options, FeedbackOptions, EventOptions, ChangeLog, APIError };
