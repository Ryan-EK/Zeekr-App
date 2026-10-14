import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const vehicle = { model: 'ZEEKR 7X', variant: 'Long Range', market: 'Australia', year: 2025, battery: 78, range: 412, odometer: 12480, capacity: 100, colour: 'Phantom Black' };

export default function App() {
  const details = [ ['Market', vehicle.market], ['Model year', String(vehicle.year)], ['Variant', vehicle.variant], ['Odometer', `${vehicle.odometer.toLocaleString('en-AU')} km`], ['Battery capacity', `${vehicle.capacity} kWh`], ['Exterior', vehicle.colour] ];
  return (
    <View style={s.screen}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={s.content}>
        <Text style={s.brand}>Z E E K R</Text>
        <Text style={s.title}>Your vehicle</Text>
        <Text style={s.subtitle}>A closer look at your drive.</Text>
        <View style={s.hero}>
          <Text style={s.tag}>DEMO DATA · NO VEHICLE CONNECTED</Text>
          <Text style={s.model}>{vehicle.model}</Text>
          <Text style={s.subtitle}>{vehicle.year} · {vehicle.variant}</Text>
          <View style={s.car} accessible accessibilityLabel="Decorative vehicle silhouette">
            <View style={s.roof} /><View style={s.body} />
            <View style={[s.wheel, { left: '16%' }]} /><View style={[s.wheel, { right: '16%' }]} />
          </View>
          <Text style={s.colour}>{vehicle.colour}</Text>
        </View>
        <View style={s.card}>
          <Text style={s.eyebrow}>BATTERY & RANGE</Text>
          <View style={s.metrics}>
            <View><Text style={s.value}>{vehicle.battery}<Text style={s.unit}> %</Text></Text><Text style={s.label}>Battery level</Text></View>
            <View><Text style={s.value}>{vehicle.range}<Text style={s.unit}> km</Text></Text><Text style={s.label}>Estimated range</Text></View>
          </View>
          <View style={s.track} accessibilityLabel={`Battery ${vehicle.battery} percent`}><View style={[s.fill, { width: `${vehicle.battery}%` }]} /></View>
          <Text style={s.note}>Range varies with driving and weather conditions.</Text>
        </View>
        <View style={s.card}>
          <Text style={s.eyebrow}>VEHICLE DETAILS</Text>
          {details.map(([label, value]) => <View key={label} style={s.row}><Text style={s.label}>{label}</Text><Text style={s.detail}>{value}</Text></View>)}
        </View>
        <Text style={s.footer}>Sample vehicle information · No live vehicle data</Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0b0e12' },
  content: { paddingHorizontal: 24, paddingTop: 64, paddingBottom: 48, maxWidth: 600, width: '100%', alignSelf: 'center', gap: 20 },
  brand: { color: '#f4f6f8', fontSize: 17, fontWeight: '700', marginBottom: 20 },
  title: { color: '#fff', fontSize: 30, fontWeight: '600' },
  subtitle: { color: '#a4acb8', fontSize: 15, lineHeight: 23 },
  hero: { backgroundColor: '#171e27', borderRadius: 24, padding: 24 },
  tag: { color: '#b5f0cf', fontSize: 10, fontWeight: '700', letterSpacing: 1, lineHeight: 18 },
  model: { color: '#fff', fontSize: 32, fontWeight: '700', marginVertical: 12 },
  colour: { color: '#a4acb8', textAlign: 'center', fontSize: 12 },
  car: { height: 140, maxWidth: 330, width: '100%', alignSelf: 'center', marginVertical: 12 },
  roof: { position: 'absolute', top: 28, left: '24%', width: '53%', height: 58, backgroundColor: '#586573', borderTopLeftRadius: 65, borderTopRightRadius: 75 },
  body: { position: 'absolute', top: 66, left: '2%', width: '96%', height: 43, backgroundColor: '#8593a1', borderTopLeftRadius: 28, borderTopRightRadius: 45, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
  wheel: { position: 'absolute', top: 89, width: 34, height: 34, borderRadius: 17, backgroundColor: '#12161c', borderColor: '#626f7c', borderWidth: 7 },
  eyebrow: { color: '#a4acb8', fontSize: 11, fontWeight: '600', letterSpacing: 1.3 },
  card: { backgroundColor: '#151a21', borderRadius: 20, padding: 22, gap: 18 },
  metrics: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 },
  value: { color: '#fff', fontSize: 36, fontWeight: '600', marginBottom: 6 },
  unit: { color: '#a4acb8', fontSize: 16, fontWeight: '400' },
  label: { color: '#a4acb8', fontSize: 14 },
  track: { height: 7, backgroundColor: '#303943', borderRadius: 4, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: '#b5f0cf', borderRadius: 4 },
  note: { color: '#a4acb8', fontSize: 12, lineHeight: 18 },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' },
  detail: { color: '#eef2f6', fontSize: 14, fontWeight: '500' },
  footer: { color: '#a4acb8', fontSize: 12, lineHeight: 18, textAlign: 'center' },
});
