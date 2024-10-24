// src/app/api/analytics/route.js

// Handle POST requests to process analytics data
export async function POST(request) {
    try {
        const data = await request.json(); // Assuming you're sending JSON
        // Process the data here (e.g., save to a database or log it)
        console.log('Received data:', data); // Log the received data for debugging
        return new Response(JSON.stringify({ message: 'Data received', data }), { status: 200 });
    } catch (error) {
        console.error('Error processing request:', error);
        return new Response('Error processing data', { status: 500 });
    }
}

// Handle GET requests to provide information about the endpoint
export async function GET() {
    return new Response('This endpoint is for sending analytics data via POST.', { status: 200 });
}

// Optional: Handle unsupported methods gracefully
export async function OPTIONS() {
    return new Response('OK', { status: 200 });
}

// Additional methods can return 405 for unsupported requests
export async function PUT() {
    return new Response('Method Not Allowed', { status: 405 });
}

export async function DELETE() {
    return new Response('Method Not Allowed', { status: 405 });
}
