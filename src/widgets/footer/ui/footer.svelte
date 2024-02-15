<script lang="ts">
import { Container } from "$ui/layout"

interface $$Props {
    class?: string
}

let className: string = ""

export {
    className as class,
}
</script>

<footer class="footer {className}">
    <Container>
        footer
    </Container>
</footer>
