const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

// admin.initializeApp();
const db = admin.firestore();

exports.addMessage = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    console.log("Received request:", req.method);
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const {question, answer} = req.body;
    console.log("Request body:", req.body);

    if (!question || !answer) {
      res.status(400).send("Bad Request");
      return;
    }

    try {
      await db.collection("messages").add({
        question: question,
        answer: answer,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });
      console.log("Message added to Firestore:", {question, answer});
      res.status(200).send("Message added");
    } catch (error) {
      console.error("Error adding message: ", error);
      res.status(500).send("Internal Server Error");
    }
  });
});
