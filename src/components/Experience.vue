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
    <h2 class="text-primary text-2xl font-bold mb-4">Experiência</h2>
    <Card class="bg-transparent">
        <CardHeader>
            <CardTitle class="text-xl">Desenvolvedora Front-End Júnior - Wiz Soluções</CardTitle>
            <CardDescription class="text-sm text-primary"> Fevereiro/2022 - Março/2023</CardDescription>
        </CardHeader>
        <CardContent class="text-base font-normal">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus impedit exercitationem
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