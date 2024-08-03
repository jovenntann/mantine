'use client';

import { useForm } from '@mantine/form';
import { Space, Title, TextInput, NumberInput, Select, Button, Container, Grid } from '@mantine/core';

export default function PropertyForm() {
  const form = useForm({
    initialValues: {
      propertyType: '',
      lotType: '',
      unitType: '',
      approximateArea: 0,
      pricePerSqm: 0,
      totalSellingPrice: 0,
      phase: '',
      block: '',
      lot: '',
    },
  });

  return (
    <Container>
    <Space h="xl" />
      <Title order={2} mb="lg">Property Form</Title>

      <form onSubmit={form.onSubmit((values) => alert(JSON.stringify(values, null, 2)))}>
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="Property Type"
              placeholder="Enter property type"
              {...form.getInputProps('propertyType')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Lot Type"
              placeholder="Enter lot type"
              {...form.getInputProps('lotType')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Unit Type"
              placeholder="Enter unit type"
              {...form.getInputProps('unitType')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              label="Approximate Area"
              placeholder="Enter approximate area"
              {...form.getInputProps('approximateArea')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              label="Price per sqm"
              placeholder="Enter price per square meter"
              {...form.getInputProps('pricePerSqm')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              label="Total Selling Price"
              placeholder="Enter total selling price"
              {...form.getInputProps('totalSellingPrice')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Phase"
              placeholder="Enter phase"
              {...form.getInputProps('phase')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Block"
              placeholder="Enter block"
              {...form.getInputProps('block')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Lot"
              placeholder="Enter lot"
              {...form.getInputProps('lot')}
            />
          </Grid.Col>
        </Grid>
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>
    </Container>
  );
}
