import type { BootStep } from "../types/bootStep";

export const bootSequence: BootStep[] = [

    {
        message: "Initializing memory core..."
    },

    {
        message: "Loading interface..."
    },

    {
        message: "Preparing evaluation engine..."
    },

    {
        message: "Connecting memory archive..."
    },

    {
        message: "Memory archive online."
    }

];