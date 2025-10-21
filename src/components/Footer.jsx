export default function Footer() {
  return (
      <footer className="bg-surface border-t border-border py-6 text-center text-text">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} KFC Clone. All Rights Reserved.
      </div>
    </footer>
  );
}
