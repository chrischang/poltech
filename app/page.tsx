"use client";
import { useAccount } from "wagmi";
import {
  DEFAULT_SUBJECTS,
  useGetSharePrice,
} from "@/app/hooks/useShareTrading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import Link from "next/link";

export default function Home() {
  const { address } = useAccount();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to POLTech</h1>
      {address ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEFAULT_SUBJECTS.map((subject) => (
            <SubjectCard key={subject} subject={subject} />
          ))}
        </div>
      ) : (
        <p>Please connect your wallet to view subjects and trade keys.</p>
      )}
    </div>
  );
}

function SubjectCard({ subject }: { subject: `0x${string}` }) {
  const { data: sharePrice } = useGetSharePrice(subject);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          Subject: {subject.slice(0, 6)}...{subject.slice(-4)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Share Price:{" "}
          {sharePrice ? parseFloat(sharePrice.toString()) / 1e18 : "Loading..."}{" "}
          BERA
        </p>
        <Link href={`/wallet?subject=${subject}`}>
          <Button className="mt-2">Trade Keys</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
