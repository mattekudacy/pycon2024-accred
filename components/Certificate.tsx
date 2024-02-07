"use client";

import { fetchImageSize } from "@/utils/fetchImageSize";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
  Font,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";

Font.register({
  family: "Open Sans",
  src: "https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4n.ttf",
});

const Certificate = ({
  certificateTemplate,
  guestName,
  certificateTextColor,
}: {
  certificateTemplate: string;
  guestName: string;
  certificateTextColor: string;
}) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getImageSize = async () => {
      const size = await fetchImageSize(certificateTemplate);
      setImageSize(size);
    };
    getImageSize(); // Gets image size of certificate from Firebase URL
  }, [certificateTemplate]);

  if (imageSize.width === 0 || imageSize.height === 0) {
    return null; // Render nothing until imageSize is fetched
  }

  const { width, height } = imageSize;
  const scaleFactor = Math.min(width, height) / 1500; // Adjust this factor as needed
  const textColor = certificateTextColor

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#ffffff",
    },
    wrapper: {
      flex: 1,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    textContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      marginLeft: 1020,
      marginTop: 950,
    },
    text: {
      textAlign: "left",
      fontSize: 80 * scaleFactor,
      color: textColor,
      fontFamily: "Open Sans",
    },
  });

  return (
    <Document>
      <Page size={[width, height]} style={styles.page}>
        <View style={styles.wrapper}>
          <Image src={certificateTemplate} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{guestName}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Certificate;
