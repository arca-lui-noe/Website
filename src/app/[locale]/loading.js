import LoadingScreen from "@/components/ui/LoadingScreen";

export default function LocaleLoading({ params }) {
  // For locale-specific pages, we can pass the locale to show the appropriate logo
  const locale = params?.locale || 'hu';
  
  return <LoadingScreen locale={locale} />;
}