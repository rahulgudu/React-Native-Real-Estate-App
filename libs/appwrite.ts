import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";

export const config = {
  platform: "com.rahul.real-estate",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);

// export async function login() {
//   try {
//     const redirectUri = Linking.createURL("/");
//     console.log("Redirect URI:", redirectUri);
//     const response = await account.createOAuth2Token(
//       OAuthProvider.Google,
//       redirectUri
//     );
//     if (!response) throw new Error("Create OAuth2 token failed");
//     console.log("OAuth URL:", response.toString());

//     const browserResult = await WebBrowser.openBrowserAsync(
//       response.toString()
//     );
//     console.log("Browser Result:", browserResult);

//     const subscription = Linking.addEventListener("url", async (event) => {
//       console.log("Redirect Event:", event.url);
//       const url = new URL(event.url);
//       const secret = url.searchParams.get("secret");
//       const userId = url.searchParams.get("userId");

//       if (!secret || !userId) throw new Error("Invalid OAuth response");

//       const session = await account.createSession(userId, secret);
//       console.log("Session Created:", session);
//       // return true;
//     });
//     return true
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }

export async function login(refetch: () => void) {
  try {
    const redirectUri = Linking.createURL("/");
    console.log("Redirect URI:", redirectUri);

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );
    if (!response) throw new Error("Create OAuth2 token failed");

    console.log("OAuth URL:", response.toString());

    await WebBrowser.openBrowserAsync(response.toString());

    return new Promise((resolve, reject) => {
      const subscription = Linking.addEventListener("url", async (event) => {
        try {
          console.log("Redirect Event:", event.url);
          const url = new URL(event.url);
          const secret = url.searchParams.get("secret");
          const userId = url.searchParams.get("userId");

          if (!secret || !userId) {
            reject(new Error("Invalid OAuth response"));
            return;
          }

          const session = await account.createSession(userId, secret);
          console.log("Session Created:", session);

          refetch(); // ✅ Now refetch after session creation
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  try {
    const result = await account.deleteSession("current");
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getCurrentUser() {
  try {
    const result = await account.get();
    if (result.$id) {
      const userAvatar = avatar.getInitials(result.name);

      return {
        ...result,
        avatar: userAvatar.toString(),
      };
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
