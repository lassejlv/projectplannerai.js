import { ProjectPlannerAI } from "projectplannerai";

try {
  const projectAIClient = ProjectPlannerAI({
    projectId: "j57934b1bj7y09xdxf4yjcm8jd6qvd8f",
  });

  //   const newFeedback = await projectAIClient.createFeedback({
  //     feedback: "Need more features",
  //     name: "John Doe",
  //     email: "john@example.com",
  //     label: "complaint",
  //   });

  //   console.log(newFeedback.message);

  //   const event = await projectAIClient.createEvent({
  //     key: "User Created",
  //   });

  //   console.log(event);

  const changelog = await projectAIClient.getChangeLog();

  changelog.map((val) => {
    console.log(val);
  });
} catch (error) {
  console.error("Failed to send feedback:", error);
}
