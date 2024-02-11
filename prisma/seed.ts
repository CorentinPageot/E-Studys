import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient();

const main = async () => {
    for (let i = 0; i < 10; i++) {
        const user = await prisma.user.create({
            data: {
                name: faker.name.firstName(),
                email: faker.internet.email(),
                emailVerified: new Date(),
                image: faker.image.avatar(),
                accounts: {
                    create: [
                        {
                            type: "email",
                            provider: "email",
                            providerAccountId: faker.datatype.uuid(),
                        }
                    ]
                }
            }
        });
        console.log("User created:", user);
    }
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
