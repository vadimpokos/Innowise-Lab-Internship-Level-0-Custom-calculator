import { calculator } from "..";

export class MemoryRead {
    execute(value, currentValue, memoryValue) {
        calculator.value = memoryValue
    }
}