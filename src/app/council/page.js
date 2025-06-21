import { db } from "@/utils/dbConnection";
export default function CouncilPage() {
  async function deleteTestplace() {
    "use server";
    await db.query(
      `DELETE FROM doghill_comments WHERE location_name = 'testplace';`
    );
  }

  async function deleteRiverbank() {
    "use server";
    await db.query(
      `DELETE FROM doghill_comments WHERE location_name = 'the_riverbank';`
    );
  }

  async function deleteButchers() {
    "use server";
    await db.query(
      `DELETE FROM doghill_comments WHERE location_name = 'the_butchers';`
    );
  }

  async function deleteDIY() {
    "use server";
    await db.query(
      `DELETE FROM doghill_comments WHERE location_name = 'DIY_shop';`
    );
  }

  async function deleteTownHall() {
    "use server";
    await db.query(
      `DELETE FROM doghill_comments WHERE location_name = 'the_town_hall';`
    );
  }

  return (
    <>
      <h1>Welcome to the council</h1>
      <button onClick={deleteTestplace}>Testplace</button>
      <button onClick={deleteRiverbank}>The Riverbank</button>
      <button onClick={deleteButchers}>The Butchers</button>
      <button onClick={deleteDIY}>DIY Shop</button>
      <button onClick={deleteTownHall}>Town Hall</button>
    </>
  );
}
