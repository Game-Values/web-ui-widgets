<script lang="ts">
import { useRegistrationByEmailForm } from "~/features/registration"

import { useRoute } from "$model"
import { Checkbox, Input } from "$ui/data"

let { form } = useRegistrationByEmailForm()
let { route: agreementPolicyRoute } = useRoute("/policy/agreement")
let { route: licensePolicyRoute } = useRoute("/policy/license")
let { route: privacyPolicyRoute } = useRoute("/policy/privacy")
</script>

<form
    class="form"
    use:form
>
    <div class="form-control">
        <Input
            name="full_name"
            inputClass="input-bordered"
            placeholder="Nickname"
            required
        />
    </div>

    <div class="form-control">
        <Input
            name="email"
            inputClass="input-bordered"
            placeholder="Email"
            required
            type="email"
        />
    </div>

    <div class="form-control">
        <Input
            name="password"
            inputClass="input-bordered"
            placeholder="Password"
            required
            type="password"
        />
    </div>

    <div class="form-control">
        <Input
            name="repeat_password"
            inputClass="input-bordered"
            placeholder="Repeat Password"
            required
            type="password"
        />
    </div>

    <div class="form-control">
        <button
            class="btn btn-primary"
            type="submit"
        >
            Registration
        </button>
    </div>

    <div class="form-control">
        <Checkbox
            name="send_notifications"
            inputClass="checkbox-sm checkbox-primary"
        >
            <span class="text-xs text-secondary">
                I want to receive notifications about promotions and offers by email
            </span>
        </Checkbox>
    </div>

    <div class="form-control">
        <Checkbox
            name="agree_with_policy"
            inputClass="checkbox-sm checkbox-primary"
            required
        >
            <small class="text-xs text-secondary">
                By registering, you agree to the

                <a
                    class="link link-primary link-hover"
                    href={$licensePolicyRoute}
                    target="_blank"
                >
                    License Agreement
                </a>,

                <a
                    class="link link-primary link-hover"
                    href={$privacyPolicyRoute}
                    target="_blank"
                >
                    Privacy Policy
                </a> and

                <a
                    class="link link-primary link-hover"
                    href={$agreementPolicyRoute}
                    target="_blank"
                >
                    Agency Agreement
                </a>
            </small>
        </Checkbox>
    </div>
</form>
