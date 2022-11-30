import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"

const API_KEY =
  "hongqiao::stepzen.net+1000::c40900e31e206ed64cedd5611637622c3e411cd2e01efd2efbb4dfe424fad5cc"

const client = new ApolloClient({
  uri: "https://hongqiao.stepzen.net/api/kindled-aardwolf/__graphql",
  headers: {
    Authorization: `Apikey ${API_KEY}`,
  },
  cache: new InMemoryCache(),
})

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <Navigation colorScheme={colorScheme} />
        </ApolloProvider>
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}
