<script setup>
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from '@/components/ui/card'

    import { Badge } from '@/components/ui/badge'
</script>

<template>
    <h2 class="text-primary text-2xl font-bold mb-4">Projects</h2>

    <Card>
        <CardHeader>
            <CardTitle class="text-xl">List Jobs Challenge</CardTitle>
            <CardDescription class=" flex text-sm text-primary">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    <a class="ml-1 mr-2" href="">Site Link</a>
                </div> |

                <div class="flex items-center px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <a class="mx-1" href="">Repo Link</a>
                </div>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <p class="text-base font-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus impedit exercitationem
                accusantium fugit quos veritatis. Amet, quibusdam labore ipsum tempora nostrum nisi eius obcaecati dolor
                velit tempore voluptatem iure!</p>
            <p class="text-base font-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus impedit exercitationem
                accusantium fugit quos veritatis. Amet, quibusdam labore ipsum tempora nostrum nisi eius obcaecati dolor
                velit tempore voluptatem iure!</p>
        </CardContent>
        <CardFooter class="flex flex-wrap">
            <Badge class="mr-3">HTML</Badge>
            <Badge class="mr-3">CSS</Badge>
            <Badge class="mr-3">JavaScript</Badge>
        </CardFooter>
    </Card>
</template>



<style></style>