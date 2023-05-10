"use client";

import TopBar from "@/components/signup/topBar";
import { useState } from "react";

export default function Signup() {
    const [TopBarProgress, setTopBarProgress] = useState<number>(25);
    return <TopBar progressValue={TopBarProgress} />;
}
