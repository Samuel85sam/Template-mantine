import React from 'react';
import { Box, Center, Grid, Stack } from '@mantine/core';
import HomePageButton from '@/components/Home-Page_link/home-Page_button';
import NavbarSimple from '@/components/nav-bar/navbar';
import Villa_txt from '@/components/Villa/Villa_txt';
import Villa_link from '@/components/Villa/Villa_link';

const Villa = () => {


    return (
        <>
            <Grid>
                <Grid.Col span={3}>
                    <NavbarSimple />
                </Grid.Col>
                <Grid.Col span={8}>
                    <Center>
                        <Stack
                            gap={80}>
                            <Box
                                mt={80}
                            >
                                <Villa_txt />
                            </Box>
                            <Box>
                                <Villa_link />
                            </Box>
                            <Box>
                                <HomePageButton />
                            </Box>
                        </Stack>
                    </Center>
                </Grid.Col>
            </Grid>
        </>
    );
};

export default Villa;