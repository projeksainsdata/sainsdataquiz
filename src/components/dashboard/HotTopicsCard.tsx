import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WordCloud from "../WordCloud";
import { prisma } from "@/lib/db";

type Props = {};

interface Topic {
  topic: string;
  count: number;
}

const HotTopicsCard = async (props: Props) => {
  const topics = await prisma.topicCount.findMany({}); // Use topicCount instead of topic_count
  const formattedTopics = topics.map((topic) => {
    return {
      text: topic.topic, // Ensure 'topic' field exists in your model
      value: topic.count, // Ensure 'count' field exists in your model
    };
  });
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <WordCloud formattedTopics={formattedTopics} />
      </CardContent>
    </Card>
  );
};


export default HotTopicsCard;
