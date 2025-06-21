<script setup>
    // import FormCheckbox from '@/modules/shared/components/FormCheckbox.vue';
    import FormInput from '@/modules/shared/components/FormInput.vue';
    import FormLabel from '@/modules/shared/components/FormLabel.vue';
    import MyButton from '@/modules/shared/components/MyButton.vue';
    import TextLink from '@/modules/shared/components/TextLink.vue';

</script>

<template>
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Inicia sesión en tu cuenta
    </h1>
    <form class="space-y-4 md:space-y-6" action="#">
        <div>
            <FormLabel for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
            </FormLabel>
            <FormInput type="email" name="email" id="email" placeholder="name@company.com" required />
        </div>
        <div>
            <FormLabel for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
            </FormLabel>
            <FormInput type="password" name="password" id="password" placeholder="••••••••"  required />
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
            </div>
            <TextLink href="#">
                Forgot password?
            </TextLink>
        </div>
        <MyButton type="submit">
            Sign in
        </MyButton>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? 
            <a href="#">
                <TextLink href="#">
                    Sign up
                </TextLink>
            </a>
        </p>
    </form>
</template>

<!-- Joao cabral  -->