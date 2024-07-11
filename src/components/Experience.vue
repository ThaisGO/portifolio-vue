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
    <h2>Experiência</h2>
    <Card>
        <CardHeader>
            <CardTitle>Wiz Soluções</CardTitle>
            <span>Desenvolvedora Front-End Júnior</span>
            <CardDescription> Fevereiro/2022 - Março/2023</CardDescription>

        </CardHeader>
        <CardContent>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus impedit exercitationem
                accusantium fugit quos veritatis. Amet, quibusdam labore ipsum tempora nostrum nisi eius obcaecati dolor
                velit tempore voluptatem iure!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus impedit exercitationem
                accusantium fugit quos veritatis. Amet, quibusdam labore ipsum tempora nostrum nisi eius obcaecati dolor
                velit tempore voluptatem iure!</p>
        </CardContent>
        <CardFooter>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
        </CardFooter>
    </Card>
</template>



<style></style>