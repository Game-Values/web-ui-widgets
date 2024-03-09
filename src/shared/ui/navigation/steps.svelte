<script lang="ts">
interface $$Props {
    class?: string
    step: number
    steps: string[]
    vertical?: boolean
}

let className: string = ""

let step: number

let steps: string[]

let vertical: boolean = false

$: isPrimaryStep = (stepIndex: number): boolean => stepIndex + 1 <= step

$: isSecondaryStep = (stepIndex: number): boolean => !isPrimaryStep(stepIndex)

export {
    className as class,
    step,
    steps,
    vertical,
}
</script>

<ul
    class="steps {className}"
    class:steps-vertical={vertical}
>
    {#each steps as stepLabel, i (stepLabel)}
        <li
            class="step"
            class:step-primary={isPrimaryStep(i)}
            class:step-secondary={isSecondaryStep(i)}
            data-content={i + 1}
        >
            {stepLabel}
        </li>
    {/each}
</ul>
