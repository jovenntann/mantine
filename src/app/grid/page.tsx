
'use client';

// Import necessary components and utilities from Mantine
import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';

// Define the primary column height using rem units
const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
  // Calculate the secondary column height based on the primary column height and spacing
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    // Container to provide margin around the grid
    <Container my="md">
      {/* SimpleGrid to create a responsive grid layout with 1 column on base and 2 columns on small screens */}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {/* Skeleton component to show a loading state with a fixed height */}
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        {/* Grid component to create a grid layout with specified gutter spacing */}
        <Grid gutter="md">
          <Grid.Col>
            {/* Skeleton component for the first secondary column */}
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            {/* Skeleton component for the second secondary column */}
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            {/* Skeleton component for the third secondary column */}
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default LeadGrid;