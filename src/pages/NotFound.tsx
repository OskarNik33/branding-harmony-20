
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-grid flex flex-col items-center justify-center px-6 py-24">
      <div className="brutalist-card p-8 md:p-12 max-w-lg text-center">
        <h1 className="text-6xl md:text-8xl font-mono font-bold mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-mono mb-8">
          {"< PAGE_NOT_FOUND >"}
        </h2>
        <p className="mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved. Maybe try using the button below to get back on track?
        </p>
        <Button 
          onClick={() => navigate('/')}
          className="neo-button bg-primary text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] font-mono"
        >
          RETURN HOME
        </Button>
      </div>
      
      <div className="mt-16 flex flex-col items-center">
        <div className="w-px h-16 bg-foreground"></div>
        <div className="mt-8 font-mono text-muted-foreground">
          ERR_CONNECTION_BRUTALIST
        </div>
      </div>
    </div>
  );
};

export default NotFound;
